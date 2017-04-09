<ItemGroup>
    <DotNetCliToolReference Include="Microsoft.DotNet.Watcher.Tools" Version="1.0.0" />
     <!-- extends watching group to include *.js files -->
    <Watch Include="**\*.ts" Exclude="node_modules\**\*.js;$(DefaultExcludes)" />
</ItemGroup>

<Target Name="PostcompileScript" AfterTargets="Build">
  <Exec Command="ng serve -o -lr -v -aot true -hmr true" />
</Target>


dotnet add package Microsoft.AspNetCore.StaticFiles
dotnet add package Microsoft.Extensions.Logging
dotnet add package Microsoft.Extensions.Logging.Debug



https://github.com/aspnet/DotNetTools/tree/dev/src/Microsoft.DotNet.Watcher.Tools
